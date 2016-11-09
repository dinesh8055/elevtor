import os
from flask import Flask, url_for, jsonify, request
from flask_sqlalchemy import SQLAlchemy


basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, '../data.sqlite')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_path

db = SQLAlchemy(app)


class ValidationError(ValueError):
    pass


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    firstName = db.Column(db.String(80))
    lastName = db.Column(db.String(80))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(120))

    def get_url(self):
        return url_for('get_user', id=self.id, _external=True)

    def export_data(self):
        return {
            'self_url': self.get_url(),
            'username': self.username,
            'firstName': self.firstName,
            'lastName': self.lastName,
            'email': self.email,
        }

    def import_data(self, data):
        try:
            self.userName = data['username']
            self.firstName = data['firstName']
            self.lastName = data['lastName']
            self.email = data['email']
            self.password = data['password']
        except KeyError as e:
            raise ValidationError('Invalid customer: missing ' + e.args[0])
        return self


@app.route('/users/', methods=['GET'])
def get_users():
    return jsonify({'users': [user.get_url() for user in
                              User.query.all()]})


@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
        return jsonify(User.query.get_or_404(id).export_date())


@app.route('/users/', methods=['POST'])
def new_customer():
    user = User()
    user.import_data(request.json)
    db.session.add(user)
    db.session.commit()
    return jsonify({}), 201, {'Location': user.get_url()}


@app.route('/users/<int:id>', methods=['PUT'])
def edit_customer(id):
    user = User.query.get_or_404(id)
    user.import_data(request.json)
    db.session.add(user)
    db.session.commit()
    return jsonify({})


if __name__ == '__main__':
    app.run(debug=True)

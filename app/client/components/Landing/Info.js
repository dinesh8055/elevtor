import React from 'react';
import { Link } from 'react-router';

class Info extends React.Component {
  render () {
    return (
      <div>
      <div className="container-fluid how_elevtor_works_box">
        <div className="row">
          <div className="how_elevtor_works_header center_align">
            How does Elevtor works?
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row no_gutter center_align">
          <div className="col-md-3">
            <div className="how_elevtor_works_boxes center_align first">
              <img src="assets/propaganda1.png" className="propaganda_icons center_align" />
              <div className="how_elevtor_works_boxes_texts">
                Search. Click. Apply.
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="how_elevtor_works_boxes center_align">
              <img src="assets/propaganda2.png" className="propaganda_icons center_align" />
              <div className="how_elevtor_works_boxes_texts">
                Get creative and build a modern video resume.
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="how_elevtor_works_boxes center_align">
              <img src="assets/propaganda3.png" className="propaganda_icons center_align" />
              <div className="how_elevtor_works_boxes_texts">
                Connect and instantly interview with hiring managers.
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="how_elevtor_works_boxes center_align">
              <img src="assets/propaganda4.png" className="propaganda_icons center_align" />
              <div className="how_elevtor_works_boxes_texts">
                Less waiting and more feedback from employers.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="how_elevtor_works_header center_align">
            Who uses Elevtor?
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
            <div className="col-xs-2 col-sm-3 col-md-2">
              <img src="assets/man.png" className="depo_images" />
            </div>
            <div className="col-xs-10 col-sm-9 col-md-10">
              <span className="level_1">
                Search through thousands of jobs locally and globally. Let companies compete for your talents in our huge video resume marketplace.
              </span>
              <br />
              <span className="level_2">Marlon Brando</span>
              <br />
              <span className="level_3">Elevtor user</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row testimony">
          <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
            <div className="col-xs-10 col-sm-9 col-md-10">
              <span className="level_1">
                Elevtor has the largest pool of video resumes for recruiters to search through. Easily find top tier talent with our powerful search feature and team based recruiting platform.
              </span>
              <br />
              <span className="level_2">Robert DeNiro</span>
              <br />
              <span className="level_3">Human Resources Manager at RecruitItAll, Inc.</span>
            </div>
            <div className="col-xs-2 col-sm-3 col-md-2">
              <img src="assets/man2.png" className="depo_images float_right" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row testimony">
          <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
            <div className="col-xs-2 col-sm-3 col-md-2">
              <img src="assets/woman.png" className="depo_images" />
            </div>
            <div className="col-xs-10 col-sm-9 col-md-10">
              <span className="level_1">
                We provide the talent and the tools. Find the best candidates today without the large fees associated with recruiters.
              </span>
              <br />
              <span className="level_2">Helen Mirren</span>
              <br />
              <span className="level_3">Hiring Manager at Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Info;

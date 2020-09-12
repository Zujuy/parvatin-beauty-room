import React from "react";
import { withRouter } from 'react-router-dom';
import { Socialbar } from '../../style/components'

function RRSSbar() {
  return (
    <Socialbar>
      <div id="sidebar">
        <div class="social facebook">
          <a href=" https://www.facebook.com " target="_blank">
            <p>Like on Facebook <i class="fa fa-facebook "></i> </p>
          </a>
        </div>
        <div class="social twitter">
          <a href=" https://www.twitter.com " target="_blank">
            <p>Follow on Twitter<i class="fa fa-twitter"></i> </p>
          </a>
        </div>
        <div class="social instagram">
          <a href=" https://www.instagram.com " target="_blank">
            <p>Follow on Twitter<i class="fa fa-twitter"></i> </p>
          </a>
        </div>
      </div>
    </Socialbar>

  )
}

export default withRouter(RRSSbar)


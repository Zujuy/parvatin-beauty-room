import React from 'react';
import { withRouter } from 'react-router-dom';
import { SocialMediaMenu } from '../../style/components';

function RRSSBar() {
  return (
    <SocialMediaMenu>
      <div class="icon-bar">
        <a
          href="https://www.facebook.com/Parvati-Beauty-Room-103248328161616"
          target="_blank"
          class="facebook"
        >
          <i class="fa fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/parvati.br/"
          target="_blank"
          class="instagram"
        >
          <i class="fa fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/message/QHIRF3BWWU5BC1"
          target="_blank"
          class="whatsapp"
        >
          <i class="fa fa-whatsapp"></i>
        </a>
      </div>
    </SocialMediaMenu>
  );
}
export default withRouter(RRSSBar);

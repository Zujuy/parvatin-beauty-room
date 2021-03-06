import React from 'react';
import { withRouter } from 'react-router-dom';
import { SocialMediaMenu, SocialMediaMobile } from '../../style/components';
import { useMediaQuery, MediaQuery } from 'react-responsive';

function SocialBar() {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 812px)',
  });

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 813px)'
  })
  return (
    <>
    {
      isMobile && (
          
          <SocialMediaMobile>
            <div class="icon-bar-mobile">
          <a
            href="https://www.instagram.com/parvati.br/"
            target="_blank"
            class="instagram-mobile"
          >
            <i class="fa fa-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/Parvati-Beauty-Room-103248328161616"
            target="_blank"
            class="facebook-mobile"
          >
            <i class="fa fa-facebook"></i>
          </a>
        </div>
          </SocialMediaMobile>
        
      )
    }
    {
      isDesktop && (
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
      )
    }

    </>
    
  );
}
export default withRouter(SocialBar);

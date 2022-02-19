import React from "react";
import { Container } from "./style";
import TwitterImg from "../icons/twitter-brands.svg";
import InstagramImg from "../icons/instagram-brands.svg";
import GitHubImg from "../icons/github-brands.svg";
import linkedinImg from "../icons/linkedin-brands.svg"
import CodepenImg from "../icons/codepen-brands.svg";

export function SocialMedia() {
  return (
    <Container>
      <div className="icon twitter">
        <div className="tooltip">Twitter</div>
        <span>
          <img src={TwitterImg} alt="Twitter" width="20" height="20"/>
        </span>
      </div>
      <div className="icon instagram">
        <div className="tooltip">Instagram</div>
        <span>
          <img src={InstagramImg} alt="Instagram" width="20" height="20"/>
        </span>
      </div>
      <div className="icon github">
        <div className="tooltip">Github</div>
        <span>
          <img src={GitHubImg} alt="GitHub" width="20" height="20"/>
        </span>
      </div>
      <div className="icon linkedin">
        <div className="tooltip">linkedin</div>
        <span>
          <img src={linkedinImg} alt="linkedin" width="20" height="20"/>
        </span>
      </div>
      <div className="icon codepen">
        <div className="tooltip">codepen</div>
        <span>
          <img src={CodepenImg} alt="codepen" width="20" height="20"/>
        </span>
      </div>
    </Container>
  );
}

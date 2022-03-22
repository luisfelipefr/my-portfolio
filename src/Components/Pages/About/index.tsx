import React from "react";
import { ToggleList } from "../../ToggleList";
import { Container, Text } from "./styles";

export function About() {
  return (
    <Container id="About">
      <h1>
        <span>02.</span> About Me
      </h1>
      <div>
        <Text>
          Hello! My name is Luis, I&rsquo;m a Front-End Developer located in
          Brazil.
        </Text>
        <Text>
          I have a passion for <span>responsive, accessible</span> apps and
          creating <span>dynamic</span> and{" "}
          <span>intuitive user experiences.</span>
        </Text>
        <Text>
          Here are a few technologies I&rsquo;ve been working with recently:
        </Text>
        <div className="list">
          <ToggleList Arrow=">" Text="JavaScript(ES6+)" />
          <ToggleList Arrow=">" Text="TypeScript" />
          <ToggleList Arrow=">" Text="Styled-component" />
          <ToggleList Arrow=">" Text="React Native" />
          <ToggleList Arrow=">" Text="ReactJS" />
        </div>
      </div>
    </Container>
  );
}

import React, { useState } from "react";
import { Container } from "./styles";

export function Form() {
  useState
  return (
    <Container>
      <div className="Form">
        <div className="form_invite">
          <form
            name="form_invite"
            action="https://formsubmit.co/luis@luigifr.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="https://luigifr.com/email-sent"></input>
            <input type="hidden" name="_subject" value="Portfolio website luigifr.com"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <div className="form_input">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                required
              />
              <span className="error"></span>
            </div>
            <div className="form_input">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="e-mail"
                required
              />
              <span className="error"></span>
            </div>

            <div className="form_input">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto"
                required
              />
            </div>
            
            <div className="form_input">
              <textarea
                className="input_your-messenger"
                id="message"
                name="message"
                placeholder="Sua mensagem..."
                required
              />
            </div>
            <div className="form_button">
              <button type="submit">enviar</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { initScrollReveal } from "../../../InitScrollReveal";
import { Container } from "./styles";

export function Form() {
  initScrollReveal();
  const { t } = useTranslation();
  return (
    <Container>
      <div className="Form">
        <div className="form_invite">
          <form
            name="form_invite"
            action="https://formsubmit.co/luis@luigifr.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="https://luigifr.com/emailsent"></input>
            <input type="hidden" name="_subject" value="Portfolio website luigifr.com"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <div className="form_input delayMediumReveal">
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t('translation.contact.form.name')}
                required
              />
              <span className="error"></span>
            </div>
            <div className="form_input delayLargeReveal">
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('translation.contact.form.email')}
                required
              />
              <span className="error"></span>
            </div>

            <div className="form_input delayExtraBigReveal">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder={t('translation.contact.form.subject')}
                required
              />
            </div>
            
            <div className="form_input delayExtraBigBigReveal">
              <textarea
                className="input_your-messenger"
                id="message"
                name="message"
                placeholder={t('translation.contact.form.message')}
                required
              />
            </div>
            <div className="form_button intervalCardReveal">
              <button type="submit">{t('translation.contact.form.submit')}</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

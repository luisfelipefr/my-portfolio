import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";

export function Form() {
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
            <div className="form_input">
              <input
                type="text"
                id="name"
                name="name"
                placeholder={t('translation.contact.form.name')}
                required
              />
              <span className="error"></span>
            </div>
            <div className="form_input">
              <input
                type="email"
                id="email"
                name="email"
                placeholder={t('translation.contact.form.email')}
                required
              />
              <span className="error"></span>
            </div>

            <div className="form_input">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder={t('translation.contact.form.subject')}
                required
              />
            </div>
            
            <div className="form_input">
              <textarea
                className="input_your-messenger"
                id="message"
                name="message"
                placeholder={t('translation.contact.form.message')}
                required
              />
            </div>
            <div className="form_button">
              <button type="submit">{t('translation.contact.form.submit')}</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

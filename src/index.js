'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import popupCall from './modules/popupCall';
import popupDiscount from './modules/popupDiscount';
import popupCheck from './modules/popupCheck';
import popupСonsultation from './modules/popupСonsultation';
import formsValidate from './modules/formsValidate';
import sendForm from './modules/sendForm';
import accordionOne from './modules/accordionOne';
import accordionTwo from './modules/accordionTwo';
import addSentence from './modules/addSentence';
import calc from './modules/calc';
import consultationSection from './modules/consultationSection';

popupCall();
popupDiscount();
popupCheck();
popupСonsultation();
formsValidate();
sendForm();
accordionOne();
accordionTwo();
addSentence();
calc();
consultationSection();
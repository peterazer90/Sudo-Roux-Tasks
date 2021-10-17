import React, { useLayoutEffect } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { Field, Layout } from '../Modules/Components';
import { UseCurrentLocation, UseFormEvents } from '../Modules/Hooks';
import Form from '../Modules/Layouts/Form';
import { Actions, States } from '../Modules/Store';
import jsonData from './data.json';

function Home() {
  const {
    state, dispatch, changeEvent, blurEvent,
  } = UseFormEvents({ ...States.CLIENT_FORM }); // form events custom hook
  const {
    data, validation, disabled, formFeedback,
  } = state;
  const { location } = UseCurrentLocation(); // get current country location
  const router = useRouter();
  /// ///////////////////////////////////////////////////////////////
  useLayoutEffect(() => {
    dispatch({ type: Actions.RECEIVE_DATA, value: jsonData }); // store data from json file
  }, []);
  /// ///////////////////////////////////////////////////////////////
  const formInputs = [
    {
      placeHolder: 'Subscribed',
      type: 'checkbox',
      value: data.subscribed,
      name: 'subscribed',
      col: 'w-1/1',
    },
    {
      placeHolder: 'First Name*',
      type: 'text',
      feedBack: {
        invalid: 'First name is required',
        success: 'Correct!',
      },
      validation: validation.firstName,
      value: data.firstName,
      name: 'firstName',
      col: 'w-1/2',
    },
    {
      placeHolder: 'Last Name*',
      type: 'text',
      feedBack: {
        invalid: 'Last name is required',
        success: 'Correct!',
      },
      validation: validation.last_name,
      value: data.last_name,
      name: 'last_name',
      col: 'w-1/2',
    },
    {
      placeHolder: 'E-Mail Address*',
      type: 'email',
      feedBack: {
        invalid: 'E-Mail Address is required',
        success: 'Correct!',
      },
      validation: validation.emailAddress,
      value: data.emailAddress,
      name: 'emailAddress',
    },
    {
      placeHolder: 'Birth Date*',
      type: 'date',
      feedBack: {
        invalid: 'Birth Date is required',
        success: 'Correct!',
      },
      validation: validation.dob,
      value: data.dob,
      name: 'dob',
    },
  ];
  /// ///////////////////////////////////////////////////////////////
  const clickEvent = () => router.push('/confirmation'); // submit form
  /// ///////////////////////////////////////////////////////////////
  console.log(location);
  return (
    <Layout.Container className="h-full">
      <Layout.Row align="center" justify="center" className="h-full">
        <Form submitFeedBack={formFeedback} className="flex flex-wrap">
          {formInputs.map((input) => (
            <div className={classNames('mb-2 px-2 w-full', input.col && `sm:${input.col}`)} key={input.name}>
              {/* eslint-disable-next-line no-nested-ternary */}
              {input.type === 'checkbox'
                ? (
                  <Field.Checkbox
                    placeHolder={input.placeHolder}
                    checked={input.value}
                    value={input.value}
                    name={input.name}
                    changeEvent={(e) => changeEvent(e.target)}
                  />
                ) : (
                  <Field.Text
                    className="border"
                    hasLabel
                    key={input.name}
                    placeHolder={input.placeHolder}
                    type={input.type}
                    feedBack={input.feedBack}
                    validation={input.validation}
                    value={input.value}
                    name={input.name}
                    changeEvent={(e) => changeEvent(e.target)}
                    blurEvent={(e) => blurEvent(e.target)}
                  />
                )}
            </div>
          ))}
          <div className="w-full text-center px-2">
            <Field.Button
              className="h-12 bg-green text-white w-full rounded mt-2"
              isDisabled={disabled}
              clickEvent={clickEvent}
            >
              Save
            </Field.Button>
          </div>
        </Form>
      </Layout.Row>
    </Layout.Container>
  );
}

export default Home;

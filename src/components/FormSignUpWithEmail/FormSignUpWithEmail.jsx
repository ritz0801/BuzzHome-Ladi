/* eslint-disable no-unused-vars */
import { Checkbox, Form, Input, message } from "antd";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { API_SIGN_UP } from '../../constant';
import ButtonCustom from '../ButtonCustom/ButtonCustom';
import './FormSignUpWithEmail.scss';
const { TextArea } = Input;


const FormSignUpWithEmail = (props) => {
    const { onSubscribe } = props;
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false)
    const [isRenter, setIsRenter] = useState(false)
    const [isBroker, setIsBroker] = useState(false)
    const [textArea, setTextArea] = useState("")
    const [fakeAmountOfSubscribers, setFakeAmountOfSubscribers] = useState(1750);
    const { t } = useTranslation();


    const submit = async (values) => {
        setFakeAmountOfSubscribers(1751);

        let bodyValues = { ...values, fullName: (values.fullName || "").trim(), type: "both", content: textArea.trim() };
        if (isRenter && !isBroker) {
            bodyValues = { ...bodyValues, type: "renter" }
        }
        else if (isBroker && !isRenter) {
            bodyValues = { ...bodyValues, type: "broker" }
        }
        else if ((isBroker && isRenter) || (!isBroker && !isRenter)) {
            bodyValues = { ...bodyValues, type: "both" }
        }

        return fetch(API_SIGN_UP, {
            method: "POST",
            body: JSON.stringify(bodyValues),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                onSubscribe();
                setTextArea("")
                setIsRenter(false)
                setIsBroker(false)
                return result;
            })
            .catch((err) => {
                throw err;
            })
    }

    const onRenterCheckBox = (e) => {
        setIsRenter(e.target.checked)
    }

    const onBrokerCheckBox = (e) => {
        setIsBroker(e.target.checked)
    }

    const onChangeTextArea = (e) => {
        setTextArea(e.target.value)
    }

    const onCheck = async () => {
        setIsLoading(true)
        try {
            const values = await form.validateFields();
            try {
                // console.log("value ", values)
                await submit(values)

                message.success(t('submitSuccess'))
                form.resetFields()
            } catch (err) {
                message.error(t('submitError'))
            }
        } catch (err) {
            message.error(t('submitError'))
        }
        setIsLoading(false)
    }

    const validatePhone = (_rule, value, callback) => {
        const phoneRegex = /^[+]?[(]?[0-9]{4}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,4}$/im;
        if (!value) {
            console.log("empty")
            // empty
            callback();
            return
        }
        const isMatch = value.match(phoneRegex);
        if (!isMatch && value !== '') {
            callback(t('invalidPhone'))
        } else {
            callback();
        }
    };

    return (
        <section className="form-signup-with-email">
            <Form form={form} name="dynamic_rule" className="content-form">
                {/* <div className="fullName-phone">
                    <Form.Item
                        name="fullName"
                        className="fullName"
                    >
                        <div className="custom-input">
                            <Input placeholder={t('namePlaceholder')} />
                        </div>
                    </Form.Item>
                </div> */}

                <Form.Item
                    name="email"
                    type="email"
                    rules={[
                        {
                            type: "email",
                            message: t('invalidEmail'),
                        },
                        {
                            required: true,
                            message: t('emailRequire')
                        }
                    ]}
                >
                    <div className="custom-input">
                        <Input placeholder="Email" type="email" />
                    </div>
                </Form.Item>

                <Form.Item
                    // className="phone"
                    name="phone"
                    rules={[
                        { validator: validatePhone }
                    ]}
                >
                    <div className="custom-input">
                        <Input placeholder={t('phone')} />
                    </div>
                </Form.Item>

                {/* <div className="textArea">
                    <p style={{ color: 'white', marginBottom: '8px', marginTop: '35px', textAlign: 'left', fontWeight: 'bold' }}>{t('titleTextArea')}</p>
                    <TextArea placeholder={t('exampleTextArea')} className="custom-textarea" value={textArea} rows={3} onChange={onChangeTextArea} />
                </div>

                <div className="check-box-container">
                    <p style={{ marginBottom: 0, marginTop: '30px', textAlign: 'left', color: 'white', fontWeight: 'bold' }}>{t('youAre')}</p>
                    <div className="check-box-wrap">
                        <Form.Item className="check-box renter">
                            <Checkbox className="custom-checkbox" defaultChecked={isRenter} onChange={onRenterCheckBox}>
                                {" "}
                                {t('renter')}
                            </Checkbox>
                        </Form.Item>

                        <Form.Item className="check-box broker">
                            <Checkbox className="custom-checkbox" defaultChecked={isBroker} onChange={onBrokerCheckBox}>
                                {" "}
                                {t('broker')}
                            </Checkbox>
                        </Form.Item>
                    </div>
                </div> */}

                <Form.Item className="form__btn-start">
                    <div className="amount-subscribers-wrap">
                        <p className="amount-subscribers amount-subscribers-left">{t('alreadyHave')} {fakeAmountOfSubscribers.toString()} {t('peopleRegistered')}</p>
                    </div>
                    <ButtonCustom type="primary" onClick={onCheck} loading={isLoading} style={{ width: '100%', borderRadius: '5px', fontWeight: 'bold', fontSize: '18px' }}>
                        {t('submit')}
                    </ButtonCustom>
                </Form.Item>
            </Form>

            {/* <Form form={form} name="dynamic_rule" className="content-form">
                <Form.Item
                    className="form-item-email"
                    name="email"
                    type="email"
                    rules={[
                        {
                            required: true,
                            message: t('emailRequire'),
                        },
                        {
                            type: 'email',
                            message: t('invalidEmail'),

                        }
                    ]}
                >
                    <Input className="custom-input" placeholder={t('email')} type="email" />

                </Form.Item>

                <Form.Item className="form-item-btn">
                    <ButtonCustom type="primary" onClick={onCheck} style={{ margin: 0 }} loading={isLoading}>
                        {t('submit')}
                    </ButtonCustom>
                </Form.Item>
            </Form> */}
        </section>
    );
}

export default FormSignUpWithEmail;
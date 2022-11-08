import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton'
import screen from '../components/Screen';
import AppText from '../components/Apptext';
import ErrorMessages from '../components/ErrorMessages';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    return (
        <View style={[screen.statusBar, styles.container]}>
            <Image
            style={styles.logo}
            source={require("../logo-red.png")}/>
            

            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                        <AppTextInput s
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onBlur={() => setFieldTouched("email") }
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <ErrorMessages visible={touched.email} error={errors.email} />
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onBlur={() => setFieldTouched("password")}
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"

                        />
                       
                       <ErrorMessages visible={touched.password} error={errors.password} />
                        <AppButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;
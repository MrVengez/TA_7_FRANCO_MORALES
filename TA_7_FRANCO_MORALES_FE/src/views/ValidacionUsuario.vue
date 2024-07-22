<template>
    <br><br>
    <form @submit.prevent="submitForm" class="container">
        <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="form.name" @input="validateName" class="form-control"/>
            <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
        </div>

        <div class="form-group">
            <label for="email">Correo:</label>
            <input type="email" id="email" v-model="form.email" @input="validateEmail" class="form-control"/>
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
        </div>

        <div class="form-group">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="form.password" @input="validatePassword" class="form-control"/>
            <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
        </div>

        <div class="form-group">
            <label for="passwordRepeat">Repetir Contraseña:</label>
            <input type="password" id="passwordRepeat" v-model="form.passwordRepeat" @input="validatePasswordRepeat" class="form-control"/>
            <p v-if="errors.passwordRepeat" class="error-message">{{ errors.passwordRepeat }}</p>
        </div>

        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    password: '',
                    passwordRepeat: '',
                    email: ''
                },
                errors: {
                    name: '',
                    password: '',
                    passwordRepeat: '',
                    email: ''
                }
            };
        },
        methods: {
            validateName() {
                if (!this.form.name) {
                    this.errors.name = 'El campo nombre es requerido';
                } else if (/\d/.test(this.form.name)) {
                    this.errors.name = 'El nombre no debe contener números';
                } else {
                    this.errors.name = '';
                }
            },
            validatePassword() {
                if (!this.form.password ) {
                    this.errors.password = 'El campo contraseña es requerido';
                } else if (this.form.password.length < 5) {
                    this.errors.password = 'La contraseña debe tener al menos 5 caracteres';
                } else {
                    this.errors.password = '';
                }
            },

            validatePasswordRepeat() {
                if (!this.form.passwordRepeat) {
                    this.errors.passwordRepeat = 'El campo contraseña es requerido';
                } else if (this.form.passwordRepeat.length < 5) {
                    this.errors.passwordRepeat = 'La contraseña debe tener al menos 5 caracteres';
                } else if (this.form.passwordRepeat!== this.form.password ) {
                    this.errors.passwordRepeat = 'La contraseña debe ser igual a la contraseña ingresada';
                }
                  else {
                    this.errors.passwordRepeat = '';
                }
            },

            validateEmail() {
                if (!this.form.email) {
                    this.errors.email = 'El campo correo es requerido';
                } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
                    this.errors.email = 'El correo es inválido';
                } else {
                    this.errors.email = '';
                }
            },
            submitForm() {
                this.validateName();
                this.validatePassword();
                this.validatePasswordRepeat();
                this.validateEmail();

                if (!Object.values(this.errors).some(error => error !== '')) {
                    
                    alert('Te has registrado con exito !!!!');
                }
            }
        }
    };
</script>

<style scoped>
    .container {
        width: 50%;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .label {
        font-weight: bold;
    }

    .form-control {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .error-message {
        color: red;
        margin-top: 5px;
    }

    .btn-primary {
        background-color: green;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    
    form {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 5px;
    }

    input[type="text"],
    input[type="password"],
    input[type="email"] {
        margin-bottom: 10px;
    }

    button {
        margin-top: 20px;
    }

</style>

<template>
  <div class="container">
    <h2>Форма регистрации нового клиента</h2>
    <hr />
    <form @submit.prevent="registerClient" method="POST" novalidate v-if="!successReg">
      <fieldset class="step" v-show="step === 1">
        <legend>Основная информация</legend>

        <div class="fields-wrapper">
          <label for="last-name">
            Фамилия
            <span>*</span>
            <input
              type="text"
              id="last-name"
              @blur="$v.formFields.lastName.$touch()"
              :class="{'invalid': $v.formFields.lastName.$error}"
              v-model="formFields.lastName"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.lastName.alpha"
            >Поле может содержать только символы кириллицы</p>
            <p
              class="invalid__message"
              v-else-if="$v.formFields.lastName.$error"
            >Поле не может быть пустым</p>
          </label>

          <label for="name">
            Имя
            <span>*</span>
            <input
              type="text"
              id="name"
              :class="{'invalid': $v.formFields.name.$error}"
              @blur="$v.formFields.name.$touch()"
              v-model="formFields.name"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.name.alpha"
            >Поле может содержать только символы кириллицы</p>
            <p
              class="invalid__message"
              v-else-if="$v.formFields.name.$error"
            >Поле не может быть пустым</p>
          </label>

          <label for="middle-name">
            Отчество
            <input
              type="text"
              id="middle-name"
              :class="{'invalid': $v.formFields.middleName.$error}"
              @blur="$v.formFields.middleName.$touch()"
              v-model="formFields.middleName"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.middleName.alpha"
            >Поле может содержать только символы кириллицы</p>
          </label>

          <label for="birthday">
            Дата рождения
            <span>*</span>
            <input
              type="date"
              id="birthday"
              :class="{'invalid': $v.formFields.birthday.$error}"
              @blur="$v.formFields.birthday.$touch()"
              v-model="formFields.birthday"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.birthday.maxDate"
            >Дата рождения не может быть в будущем</p>
            <p
              class="invalid__message"
              v-else-if="$v.formFields.birthday.$error"
            >Поле не может быть пустым</p>
          </label>

          <label for="telephone">
            Номер телефона
            <span>*</span>
            <input
              type="tel"
              id="telephone"
              :class="{'invalid': $v.formFields.telephone.$error}"
              @blur="$v.formFields.telephone.$touch()"
              v-model="formFields.telephone"
              placeholder="+7(999)999-99-99"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.telephone.tel"
            >Телефон должен иметь следующий вид "+7 (999) 999-99-99"</p>
            <p
              class="invalid__message"
              v-else-if="$v.formFields.telephone.$error"
            >Поле не может быть пустым</p>
          </label>

          <label for="gender">
            Пол
            <select v-model="formFields.gender">
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </label>

          <label for="сlient-group">
            Группа клиентов
            <span>*</span>
            <select
              :class="{'invalid': $v.formFields.сlientGroup.$error}"
              @blur="$v.formFields.сlientGroup.$touch()"
              v-model="formFields.сlientGroup"
              multiple
              size="3"
            >
              <option value="vip">VIP</option>
              <option value="problem">Проблемные</option>
              <option value="oms">ОМС</option>
            </select>
            <p
              class="invalid__message"
              v-if="$v.formFields.сlientGroup.$error"
            >Поле не может быть пустым</p>
          </label>

          <label for="doctor">
            Лечащий врач
            <select v-model="formFields.doctor">
              <option value="ivanov">Иванов</option>
              <option value="zaharom">Захаров</option>
              <option value="chernishova">Чернышева</option>
            </select>
          </label>

          <label for="sms" class="checkbox-wrapper">
            <input type="checkbox" id="sms" v-model="formFields.sms" />
            Не отправлять СМС
          </label>
        </div>
        <div class="btn-wrapper">
          <button class="btn" @click="nextStep" type="button">Продложить</button>
        </div>
      </fieldset>

      <fieldset class="step" v-show="step === 2">
        <legend>Адрес</legend>

        <div class="fields-wrapper">
          <label for="index">
            Индекс
            <input
              type="text"
              id="index"
              :class="{'invalid': $v.formFields.index.$error}"
              @blur="$v.formFields.index.$touch()"
              v-model="formFields.index"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.index.numeric"
            >Поле может содержать только цифры</p>
          </label>

          <label for="country">
            Страна
            <input
              type="text"
              id="country"
              :class="{'invalid': $v.formFields.country.$error}"
              @blur="$v.formFields.country.$touch()"
              v-model="formFields.country"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.country.alpha"
            >Поле может содержать только символы кириллицы</p>
          </label>

          <label for="region">
            Область
            <input
              type="text"
              id="region"
              :class="{'invalid': $v.formFields.region.$error}"
              @blur="$v.formFields.region.$touch()"
              v-model="formFields.region"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.region.alpha"
            >Поле может содержать только символы кириллицы</p>
          </label>

          <label for="city">
            Город
            <span>*</span>
            <input
              type="text"
              id="city"
              :class="{'invalid': $v.formFields.city.$error}"
              @blur="$v.formFields.city.$touch()"
              v-model="formFields.city"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.city.alpha"
            >Поле может содержать только символы кириллицы</p>
            <p
              class="invalid__message"
              v-else-if="$v.formFields.city.$error"
            >Поле не может быть пустым</p>
          </label>

          <label for="street">
            Улица
            <input
              type="text"
              id="street"
              :class="{'invalid': $v.formFields.street.$error}"
              @blur="$v.formFields.street.$touch()"
              v-model="formFields.street"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.street.alpha"
            >Поле может содержать только символы кириллицы</p>
          </label>

          <label for="house">
            Дом
            <input type="text" id="house" v-model="formFields.house" />
          </label>
        </div>
        <div class="btn-wrapper">
          <button class="btn btn--prev" @click="prevStep" type="button">Вернуться</button>
          <button class="btn" @click="nextStep" type="button">Продложить</button>
        </div>
      </fieldset>

      <fieldset class="step" v-show="step === 3">
        <legend>Паспорт</legend>

        <div class="fields-wrapper">
          <label for="document">
            Тип документа
            <span>*</span>
            <select
              :class="{'invalid': $v.formFields.document.$error}"
              @blur="$v.formFields.document.$touch()"
              v-model="formFields.document"
            >
              <option value="passport">Пасспорт</option>
              <option value="birth-certificate">Свидетельство о рождении</option>
              <option value="drive-pass">Вод. удостоверение</option>
            </select>
            <p
              class="invalid__message"
              v-if="$v.formFields.document.$error"
            >Поле не может быть пустым</p>
          </label>

          <label for="doc-series">
            Серия
            <input
              type="text"
              id="doc-series"
              :class="{'invalid': $v.formFields.docSeries.$error}"
              @blur="$v.formFields.docSeries.$touch()"
              v-model="formFields.docSeries"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.docSeries.numeric"
            >Поле может содержать только цифры</p>
          </label>

          <label for="doc-number">
            Номер
            <input
              type="text"
              id="doc-number"
              :class="{'invalid': $v.formFields.docNumber.$error}"
              @blur="$v.formFields.docNumber.$touch()"
              v-model="formFields.docNumber"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.docNumber.numeric"
            >Поле может содержать только цифры</p>
          </label>

          <label for="doc-origin">
            Кем выдан
            <input type="text" id="doc-origin" v-model="formFields.docOrigin" />
          </label>

          <label for="doc-date">
            Дата выдачи
            <span>*</span>
            <input
              type="date"
              id="doc-date"
              :class="{'invalid': $v.formFields.docDate.$error}"
              @blur="$v.formFields.docDate.$touch()"
              v-model="formFields.docDate"
            />
            <p
              class="invalid__message"
              v-if="!$v.formFields.docDate.maxDate"
            >Дата выдачи не может быть в будущем</p>
            <p
              class="invalid__message"
              v-else-if="$v.formFields.docDate.$error"
            >Поле не может быть пустым</p>
          </label>
        </div>
        <div class="btn-wrapper">
          <button class="btn btn--prev" @click="prevStep" type="button">Вернуться</button>
          <button class="btn" type="submit">Зарегестрироваться</button>
        </div>
      </fieldset>
    </form>
    <SuccessAlert v-if="successReg" v-bind:formFields="formFields" />
  </div>
</template>

<script>
import SuccessAlert from "@/components/SuccessAlert";
import { required, helpers, numeric } from "vuelidate/lib/validators";

const alpha = helpers.regex("alpha", /^[А-Яа-я\s]+$'*$/);
const tel = helpers.regex("tel", /^\+?[7][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/);
const maxDate = date =>
  helpers.withParams(
    { type: "maxDate", value: date },
    value => !helpers.req(value) || date > value
  );

const dateNow = new Date().toISOString().substring(0, 10);

export default {
  name: "App",
  data() {
    return {
      step: 1,
      successReg: "",
      formFields: {
        lastName: "",
        name: "",
        middleName: "",
        birthday: "",
        telephone: "",
        gender: "",
        сlientGroup: [],
        doctor: "",
        sms: "",
        index: "",
        country: "",
        region: "",
        city: "",
        street: "",
        house: "",
        document: "",
        docSeries: "",
        docNumber: "",
        docOrigin: "",
        docDate: ""
      }
    };
  },
  validations: {
    formFields: {
      lastName: {
        required,
        alpha
      },
      name: {
        required,
        alpha
      },
      middleName: {
        alpha
      },
      birthday: {
        required,
        maxDate: maxDate(dateNow)
      },
      telephone: {
        required,
        tel
      },
      gender: {},
      сlientGroup: {
        required
      },
      doctor: {},
      sms: {},
      index: {
        numeric
      },
      country: {
        alpha
      },
      region: {
        alpha
      },
      city: {
        required,
        alpha
      },
      street: {
        alpha
      },
      house: {},
      document: {
        required
      },
      docSeries: {
        numeric
      },
      docNumber: {
        numeric
      },
      docOrigin: {},
      docDate: {
        required,
        maxDate: maxDate(dateNow + 1)
      }
    }
  },
  methods: {
    checkStep() {
      let valid = true;
      let actualFields = this.actualFormFieldKeys();

      for (let i = 0; i < actualFields.length; i++) {
        this.$v.formFields[actualFields[i]].$touch();

        if (this.$v.formFields[actualFields[i]].$invalid && valid != false) {
          valid = false;
        }
      }

      return valid;
    },
    nextStep() {
      if (this.checkStep() == false) return false;

      let steps = this.$el.querySelectorAll(".step").length;
      if (this.step < steps) this.step++;
    },
    prevStep() {
      if (this.step > 1) this.step--;
    },
    registerClient() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.step = 0;
        this.successReg = true;
      }
    },
    actualFormFieldKeys() {
      let actualQuantityFields = this.$el
        .querySelectorAll(".step")
        [this.step - 1].querySelectorAll("label").length;
      let firstActualFields = this.prevQuantityFields();

      let fields = Object.keys(this.formFields).slice(
        firstActualFields,
        firstActualFields + actualQuantityFields
      );

      return fields;
    },
    prevQuantityFields() {
      let prevStepsFields = 0;

      for (let i = 0; i < this.step - 1; i++) {
        prevStepsFields += this.$el
          .querySelectorAll(".step")
          [i].querySelectorAll("label").length;
      }

      console.log(this.$v.formFields.birthday.$model);

      return prevStepsFields;
    }
  },
  components: {
    SuccessAlert
  }
};
</script>


<style lang="scss" scoped>
h2 {
  margin-bottom: 10px;
  text-align: center;
  font-size: 24px;
}

hr {
  margin-bottom: 30px;
}

form {
  padding: 15px 15px 30px 15px;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
}

fieldset {
  border: none;
}

legend {
  margin-bottom: 20px;
  font-size: 20px;
  border-bottom: 1px solid $main-color;
  text-transform: uppercase;
  font-weight: 500;
}

.fields-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

label {
  flex-basis: 50%;
  padding-right: 10px;
  padding-left: 10px;
  flex-grow: 1;
}

.checkbox-wrapper {
  flex-grow: 0;
  flex-basis: auto;
}

input:not([type="checkbox"]),
select {
  display: block;
  width: 100%;
}

input,
select {
  padding: 10px 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid $gray-color;
}

input {
  max-height: 42px;
}

.invalid {
  border-color: $error-color;
  box-shadow: 0 0 5px -2px $error-color;
  animation: 1.2s invalid-animation;
}

@keyframes invalid-animation {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    transform: translateX(-2px);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(2px);
  }
}

.invalid__message {
  margin-top: -7px;
  font-size: 12px;
  color: $error-color;
  font-style: italic;
}

span {
  font-size: 12px;
  color: $main-color;
}

.btn-wrapper {
  display: flex;
  justify-content: center;
}

.btn {
  transition: all 0.3s;
  display: block;
  padding: 10px 20px;
  margin-right: 20px;
  margin-left: 20px;
  border: 2px solid $addition-color;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: $addition-color;

  &--prev {
    background-color: transparent;
    color: $gray-color;
    border-color: $gray-color;
  }

  &--prev:hover {
    color: $addition-color;
    border-color: $addition-color;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
}

@media (max-width: $mobile-width) {
  label {
    flex-basis: 100%;
    padding: 0;
    margin-bottom: 5px;
  }

  .btn {
    width: 100%;
    margin: 10px 0;
  }

  .btn-wrapper {
    display: block;
    justify-content: center;
  }
}
</style>

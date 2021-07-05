import { Component } from "react";
import Joi from "joi-browser";
import { Text, Select } from "./Input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false, stripUnknown: true };
    //console.log(this.state.data);
    //console.log(this.schema);
    const { error } = Joi.validate(this.state.data, this.schema, options);
    //console.log(error);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const property = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(property, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Text
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
        type={type}
      />
    );
  };

  renderSelect = (name, label, options = []) => {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        value={data[name]}
        options={options}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderButton(label, disable = true) {
    return (
      <button
        className="btn btn-primary"
        disabled={disable ? this.validate() : false}
      >
        {label}
      </button>
    );
  }

  builtOptions(
    options,
    nameKey,
    valueKey,
    firstOption = { name: "Choose...", value: "" }
  ) {
    const selectOptions = [firstOption];
    options.forEach((option) => {
      selectOptions.push({ name: option[nameKey], value: option[valueKey] });
    });
    return selectOptions;
  }
}

export default Form;

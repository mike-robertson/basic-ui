Normally, `onSubmit` will look like this: `(event) => void`
If `onSubmitSuccess: () => void` is included, then `onSubmit`'s signature should look like this:
`(onSubmitSuccess) => (event) => void`

```
<DefaultTheme>
  <Form onSumbit={function(e) {
    e.preventDefault();
  }}>
    <FormGroup>
      <TextInput label="Input" />
      <TextInput label="Other" />
    </FormGroup>
    <FormGroup>
      <TextInput label="Wow" />
      <TextInput label="Forms" />
    </FormGroup>
    <FormSubmit loading>Text</FormSubmit>
  </Form>
</DefaultTheme>
```

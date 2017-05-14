Default behavior is to show on render. If you pass a `Controls` component, it will get the control props added to it to show/hide the modal. The `initialHiddenState={true}` if you pass controls, so you can override it with `initialHiddenState={false}` if you wanted that scenario for some reason.
```
<DefaultTheme>
  <Modal
    title="Example Modal Title"
    Controls={({ show }) => <Button onClick={show}>Show Modal</Button>}
    hideName="test"
  >
    <Form onSumbit={function(e) {
      e.preventDefault();
      console.log('test', e)
    }}>
      <FormGroup>
        <TextInput label="Input" />
        <TextInput label="Other" />
      </FormGroup>
      <FormGroup>
        <TextInput label="Wow" />
        <TextInput label="Forms" />
      </FormGroup>
      <FormGroup>
        <TextInput label="Wow" />
        <TextInput label="Forms" />
      </FormGroup>
      <FormGroup>
        <TextInput label="Wow" />
        <TextInput label="Forms" />
      </FormGroup>
      <FormSubmit>Text</FormSubmit>
    </Form>
  </Modal>
</DefaultTheme>
```

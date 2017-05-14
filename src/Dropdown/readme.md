classes: PropTypes.object,
className: PropTypes.string,
items: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  groupId: PropTypes.string,
})),
groups: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
})),
onClick: PropTypes.func,

```
<DefaultTheme>
  <div style={{ width: 200, position: 'relative' }}>
  <Dropdown
    items={[{id: 1, label: 'haha', groupId: 1},{id: 2, label: 'blah', groupId: 2}]}
    groups={[{id: 1, label: 'jokes'},{id: 2, label: 'bad jokes'}]}
  />
  </div>
</DefaultTheme>
```

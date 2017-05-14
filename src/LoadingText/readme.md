isLoading = true
```
<DefaultTheme>
  <LoadingText isLoading={true}>{undefined}</LoadingText>
</DefaultTheme>
```
isError = true
```
<DefaultTheme>
  <LoadingText isError={true}>Test</LoadingText>
</DefaultTheme>
```
isLoading = false && isError = false
```
<DefaultTheme>
  <LoadingText isError={false} isLoading={false}>Async call result child</LoadingText>
</DefaultTheme>
```

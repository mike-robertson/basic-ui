isLoading = true
```
<LoadingText isLoading={true}>{undefined}</LoadingText>
```
isError = true
```
<LoadingText isError={true}>Test</LoadingText>
```
isLoading = false && isError = false
```
<LoadingText isError={false} isLoading={false}>Async call result child</LoadingText>
```

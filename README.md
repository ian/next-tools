# next-tools

The missing utility belt for Next.js.

## Quickstart

Install next-tools and dependencies:

```
npm i next-tools
```

## API Reference

`DisableSSR`

Component to disable SSR.

```tsx
const MyComponent = () => {
  return (
    <DisableSSR>
      <p>This will only be rendered in the client.</p>
    </DisableSSR>
  );
};
```

`SafeHydrate`

Component to suppress hydration warnings from Next.js.

Next.js will complain about server rendered hydration being different than client.

```tsx
const MyComponent = () => {
  return <SafeHydrate>{new Date().toISOString()}</SafeHydrate>;
};
```

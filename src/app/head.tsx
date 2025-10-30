export default function Head() {
  return (
    <>
      {/* Use a static favicon hosted in public/ to avoid Next.js processing an ICO in src/app */}
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}

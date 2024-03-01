import "@styles/globals.css";
// import Provider from "@components/Provider";

export const metadata = {
  title: "Imagination Station",
  description: "Showcase Your Work",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
};

export default layout;

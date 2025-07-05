
function Footer() {

  return (
    <div className="fixed bottom-0 w-full text-center text-gray-400 text-sm p-3 bg-black">
        <p>
          <span className="text-lg">©</span> {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/aakashap01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            AakashAp
          </a>{" "}
          | Powered by Passion ⚡ and ❤️
        </p>
      </div>
  );
}

export default Footer;
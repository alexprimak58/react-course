function mainContainer(reactElement, container) {
  // const domElements = document.createElement(reactElement.type)
  // domElements.innerHTML = reactElement.children;
  // domElements.setAttribute('href', reactElement.props.href);
  // domElements.setAttribute('target', reactElement.props.target);
  // container.appendChild(domElements)

  const domElements = document.createElement(reactElement.type);
  domElements.innerHTML = reactElement.children;
  for (const key in reactElement.props) {
    if (key === "children") continue;
    domElements.setAttribute(key, reactElement.props[key]);
  }
  container.appendChild(domElements);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit a google",
};

const mainContainer1 = document.querySelector("#root");

mainContainer(reactElement, mainContainer1);

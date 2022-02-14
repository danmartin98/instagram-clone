import { createContext } from "react";

const FirebaseContext = createContext(null);
export default FirebaseContext;
// Context allows you to use firebase in another component without poassing down into each sub component props. S
// Something called provider (at the top of tree) and consumer

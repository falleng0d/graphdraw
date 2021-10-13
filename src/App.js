import logo from './logo.svg';
import './App.css';
import { Gitgraph } from "@gitgraph/react";

function App() {
  return (
    <div className="App">
      <Gitgraph>{(gitgraph) => {
        const master = gitgraph.branch("master");
        master.commit("Init the project");
        master
          .commit("Add README")
          .commit("Add tests")
          .commit("Implement feature");
        master.tag("v1.0");
        const newFeature = gitgraph.branch("new-feature");
        newFeature.commit("Implement an awesome feature");
        master.commit("Hotfix a bug");
        newFeature.commit("Fix tests");
        // Merge `newFeature` into `master`
        master.merge(newFeature, "Release new version")
      }}
      </Gitgraph>
    </div>
  );
}

export default App;

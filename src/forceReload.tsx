import React, {useState} from 'react'
import Main from "./Main";

export default function ForceReload() {
  const [forceReload, setForceReload] = useState(0)

  return <div>
    <div>
      <button onClick={() => setForceReload(n => n + 1)}>Reload {forceReload}</button>
    </div>
    <Main/>
  </div>
};

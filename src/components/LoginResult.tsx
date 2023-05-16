import React from "react";

type LoginResultProps = {
  result: string;
};

const LoginResult: React.FC<LoginResultProps> = ({ result }) => {
  return (
    <div>
      <h3>Login Result:</h3>
      <p>{result}</p>
      {result === "HACKED" ? (
        <img src="hacked.png" alt="HACKED" />
      ) : (
        <img src="failed.png" alt="FAILED" />
      )}
    </div>
  );
};

export default LoginResult;
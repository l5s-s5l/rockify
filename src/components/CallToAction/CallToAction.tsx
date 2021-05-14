import React from "react";

interface CallToAction {
  name: string | undefined;
}

function CallToAction(props: CallToAction): JSX.Element {
  const { name } = props;
  const addToList = (): void => {
    alert(`listItem", ${name}, "is added to you're list`);
  };
  return (
    <span
      data-testid="cta-list-item"
      onClick={addToList}
    >
      {name}
    </span>
  );
}

export default CallToAction;
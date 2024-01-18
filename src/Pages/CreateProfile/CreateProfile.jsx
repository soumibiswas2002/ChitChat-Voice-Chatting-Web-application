import React from "react";
import styles from "./CreateProfile.module.css";
import Card from "../../Components/Card/Card";
import CreateComponents from "./CreateComponents";

const CreateProfile = () => {
  return (
    <div className={styles.cardwrapper}>
      <Card children={<CreateComponents />} />
    </div>
  );
};

export default CreateProfile;

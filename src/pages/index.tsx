import type { NextPage } from "next";
import Head from "next/head";
import { memo, useCallback, useState } from "react";

import styles from "@/styles/Home.module.scss";
import { RadioGroup } from "@/components/radio";
import Switch from "@/components/switch";

const Home: NextPage = () => {
  const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const [select, setSelect] = useState("1");
  const handleRadio = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelect(e.target.value);
  }, []);
  const RadioGroupMemo = memo(function RadioGroupMemo() {
    return (
      <RadioGroup
        items={items}
        name="items"
        checkedValue={select}
        className={styles.radio}
        onChange={handleRadio}
      />
    );
  });

  const [isSwitch, setIsSwitch] = useState(false);
  const handleSwitch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSwitch(e.target.checked);
  }, []);
  const SwitchMemo = memo(function SwitchMemo() {
    return (
      <Switch
        name="switch"
        id="switch"
        value="switch"
        checked={isSwitch}
        className={styles.switch}
        onChange={handleSwitch}
      />
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <RadioGroupMemo />
        <SwitchMemo />
      </main>
    </div>
  );
};

export default Home;

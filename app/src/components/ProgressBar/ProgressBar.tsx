import React, { useCallback, useEffect, useRef, useState } from "react";
import Router from "next/router";

import * as S from "./ProgressBar.styled";

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<null | number>(null);
  const intervalRef = useRef<NodeJS.Timer>();

  const start = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setProgress((progress) => {
        if (progress === null) {
          return 0;
        }

        const remaining = 100 - progress;

        return Math.min(progress + remaining * 0.2, 100);
      });
    }, 200);

    return () => {
      clearInterval(intervalRef.current!);
    };
  }, []);

  const finish = useCallback(() => {
    clearInterval(intervalRef.current!);

    setProgress(100);

    setTimeout(() => {
      setProgress(null);
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, []);

  useEffect(() => {
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", finish);
    Router.events.on("routeChangeError", finish);

    () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", finish);
      Router.events.off("routeChangeError", finish);
    };
  }, [start, finish]);

  return (
    <S.Container>
      {progress !== null ? <S.ProgressBar progress={progress} /> : null}
    </S.Container>
  );
};

export default ProgressBar;

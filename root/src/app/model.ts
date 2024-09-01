import { createEffect, sample } from "effector";
import { createBrowserHistory } from "history";

// @ts-expect-error no type
import { router } from '@todo/utils'
import { appStarted } from "../system";

const createBrowserHistoryFx = createEffect(createBrowserHistory)

sample({
  clock: appStarted,
  target: createBrowserHistoryFx,
})

sample({
  clock: createBrowserHistoryFx.doneData,
  target: router.setHistory,
});
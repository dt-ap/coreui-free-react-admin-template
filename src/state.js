import { atom, useRecoilState } from 'recoil'

const sidebarState = atom({
  key: 'sidebarState',
  default: 'responsive'
});

export const useSidebarState = () => useRecoilState(sidebarState)

import { atom } from "nanostores"
import { useStore } from "@nanostores/react"

import fetch from "../fetch"


export const $banners = atom<Banner[]>([])
export const $companyReviews = atom<CompanyReview[]>([])
export const $jewerly = atom<Jewerly[]>([])

export const useBanners = () => useStore($banners)
export const useCompanyReviews = () => useStore($companyReviews)
export const useJewerly = () => useStore($jewerly)


fetch('banners.json', $banners)
fetch('companyReviews.json', $companyReviews)
fetch('jewerly.json', $jewerly)


import { atom } from "nanostores"
import { useStore } from "@nanostores/react"

import fetch from "../fetch"


export const $banners = atom<Banner[]>([])
export const $companyReviews = atom<CompanyReview[]>([])

export const useBanners = () => useStore($banners)
export const useCompanyReviews = () => useStore($companyReviews)


fetch('banners.json', $banners)
fetch('companyReviews.json', $companyReviews)


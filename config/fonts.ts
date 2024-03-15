import { Roboto as FontMono, Poppins as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: "700",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  weight: "900",
})

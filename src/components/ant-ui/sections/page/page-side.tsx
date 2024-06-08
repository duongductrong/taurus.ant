"use client"

import { ForwardRefComponent } from "@/types/react-polymorphic"
import { createStyles } from "antd-style"
import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Flex } from "../../ui/flex"

const useStyles = createStyles(({ token, isDarkMode }) => {
  return {
    side: {
      width: token.Page.sideWidth,
    },
    sideHeader: {
      height: token.Page.itemHeaderHeight,
      padding: token.paddingSM,
      paddingInline: token.paddingMD,
      background: isDarkMode ? "#141414" : token.colorBgBase,
      color: token.colorTextBase,

      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderRightWidth: 1,
      borderRightStyle: "solid",
      borderColor: token.colorBorderSecondary,
    },

    sideBody: {
      height: `calc(100lvh - ${token.Page.itemHeaderHeight}px - ${token.Page.itemHeaderHeight}px)`,
      overflow: "auto",

      // "::-webkit-scrollbar": {},
      // "::-webkit-scrollbar-thumb": {},
    },

    sideFooter: {
      background: isDarkMode ? "#141414" : token.colorBgBase,
      padding: token.paddingSM,
      paddingInline: token.paddingMD,
      height: token.Page.itemFooterHeight,
      color: token.colorTextBase,

      borderTop: `1px solid ${token.colorBorderSecondary}`,
      borderRight: `1px solid ${token.colorBorderSecondary}`,
    },
  }
})

export interface PageSideProps extends ComponentPropsWithoutRef<typeof Flex> {}

export const PageSide = forwardRef(({ className, ...props }, ref) => {
  const { cx, styles } = useStyles()

  return <Flex {...props} className={cx(styles.side, className)} ref={ref} vertical />
}) as ForwardRefComponent<"div", PageSideProps>

PageSide.displayName = "PageSide"

export interface PageSideHeaderProps extends ComponentPropsWithoutRef<typeof Flex> {}

export const PageSideHeader = forwardRef(({ className, children, ...props }, ref) => {
  const { cx, styles } = useStyles()
  return (
    <Flex {...props} className={cx(styles.sideHeader)} ref={ref}>
      {children}
    </Flex>
  )
}) as ForwardRefComponent<"div", PageSideHeaderProps>

PageSideHeader.displayName = "PageSideHeader"

export const PageSideBody = forwardRef(({ className, children, ...props }, ref) => {
  const { cx, styles } = useStyles()
  return (
    <Flex {...props} className={cx(styles.sideBody)} ref={ref} vertical>
      {children}
    </Flex>
  )
}) as ForwardRefComponent<"div", PageSideHeaderProps>

PageSideBody.displayName = "PageSideBody"

export interface PageSideFooterProps extends ComponentPropsWithoutRef<typeof Flex> {}

export const PageSideFooter = forwardRef(({ children, className, ...props }, ref) => {
  const { cx, styles } = useStyles()
  return (
    <Flex {...props} className={cx(styles.sideFooter, className)} ref={ref}>
      {children}
    </Flex>
  )
}) as ForwardRefComponent<typeof Flex, PageSideFooterProps>

PageSideFooter.displayName = "PageSideFooter"

'use client'
import React, { FC } from 'react'
import {
  Box,
  BoxProps,
  ResponsiveSpace,
  ContentBlock,
  GridContainer,
} from '@island.is/island-ui/core'

export const simpleSpacing = [2, 2, 3] as ResponsiveSpace

export const SectionWrapper: FC<React.PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => <GridContainer>{children}</GridContainer>

export default SectionWrapper

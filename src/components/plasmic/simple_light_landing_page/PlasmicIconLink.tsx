// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gkUEyTKG3Uz93y5yENHCXe
// Component: VgUwDBkm5nZOV
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: gkUEyTKG3Uz93y5yENHCXe/projectcss
import * as sty from "./PlasmicIconLink.module.css"; // plasmic-import: VgUwDBkm5nZOV/css

export type PlasmicIconLink__VariantMembers = {};

export type PlasmicIconLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicIconLink__VariantsArgs;
export const PlasmicIconLink__VariantProps = new Array<VariantPropType>();

export type PlasmicIconLink__ArgsType = {
  icon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicIconLink__ArgsType;
export const PlasmicIconLink__ArgProps = new Array<ArgPropType>("icon");

export type PlasmicIconLink__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultIconLinkProps {
  icon?: React.ReactNode;
  className?: string;
}

function PlasmicIconLink__RenderFunc(props: {
  variants: PlasmicIconLink__VariantsArgs;
  args: PlasmicIconLink__ArgsType;
  overrides: PlasmicIconLink__OverridesType;
  dataFetches?: PlasmicIconLink__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <svg
              className={classNames(defaultcss.all, sty.svg__stLtk)}
              role={"img"}
            />
          ),

          value: args.icon,
          className: classNames(sty.slotIcon)
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicIconLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIconLink__VariantsArgs;
    args?: PlasmicIconLink__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicIconLink__Fetches;
  } & Omit<PlasmicIconLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicIconLink__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicIconLink__ArgProps,
      internalVariantPropNames: PlasmicIconLink__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicIconLink__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIconLink";
  } else {
    func.displayName = `PlasmicIconLink.${nodeName}`;
  }
  return func;
}

export const PlasmicIconLink = Object.assign(
  // Top-level PlasmicIconLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicIconLink
    internalVariantProps: PlasmicIconLink__VariantProps,
    internalArgProps: PlasmicIconLink__ArgProps
  }
);

export default PlasmicIconLink;
/* prettier-ignore-end */

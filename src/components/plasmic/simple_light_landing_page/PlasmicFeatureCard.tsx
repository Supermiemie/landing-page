// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gkUEyTKG3Uz93y5yENHCXe
// Component: LOOM9Oqv8k9BA
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
import * as sty from "./PlasmicFeatureCard.module.css"; // plasmic-import: LOOM9Oqv8k9BA/css

export type PlasmicFeatureCard__VariantMembers = {
  long: "long";
};

export type PlasmicFeatureCard__VariantsArgs = {
  long?: SingleBooleanChoiceArg<"long">;
};

type VariantPropType = keyof PlasmicFeatureCard__VariantsArgs;
export const PlasmicFeatureCard__VariantProps = new Array<VariantPropType>(
  "long"
);

export type PlasmicFeatureCard__ArgsType = {
  iconFront?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  iconBack?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFeatureCard__ArgsType;
export const PlasmicFeatureCard__ArgProps = new Array<ArgPropType>(
  "iconFront",
  "title",
  "description",
  "iconBack"
);

export type PlasmicFeatureCard__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultFeatureCardProps {
  iconFront?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  iconBack?: React.ReactNode;
  long?: SingleBooleanChoiceArg<"long">;
  className?: string;
}

function PlasmicFeatureCard__RenderFunc(props: {
  variants: PlasmicFeatureCard__VariantsArgs;
  args: PlasmicFeatureCard__ArgsType;
  overrides: PlasmicFeatureCard__OverridesType;
  dataFetches?: PlasmicFeatureCard__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__long]: hasVariant(variants, "long", "long")
      })}
    >
      {(hasVariant(variants, "long", "long") ? false : true) ? (
        <div
          className={classNames(defaultcss.all, sty.box__mPkW, {
            [sty.box__long__mPkWWebzj]: hasVariant(variants, "long", "long")
          })}
        >
          <div
            className={classNames(defaultcss.all, sty.box__aQVxH, {
              [sty.box__long__aQVxHwebzj]: hasVariant(variants, "long", "long")
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <svg
                  className={classNames(defaultcss.all, sty.svg__rvCq8)}
                  role={"img"}
                />
              ),

              value: args.iconFront
            })}
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__zvpId, {
          [sty.box__long__zvpIdWebzj]: hasVariant(variants, "long", "long")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title",
          value: args.title,
          className: classNames(sty.slotTitle, {
            [sty.slotTitle__long]: hasVariant(variants, "long", "long")
          })
        })}

        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          value: args.description,
          className: classNames(sty.slotDescription, {
            [sty.slotDescription__long]: hasVariant(variants, "long", "long")
          })
        })}
      </p.Stack>

      {(hasVariant(variants, "long", "long") ? true : false) ? (
        <div
          className={classNames(defaultcss.all, sty.box___5QoxM, {
            [sty.box__long___5QoxMwebzj]: hasVariant(variants, "long", "long")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(defaultcss.all, sty.svg__ueNpV)}
                role={"img"}
              />
            ),

            value: args.iconBack
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatureCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeatureCard__VariantsArgs;
    args?: PlasmicFeatureCard__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFeatureCard__Fetches;
  } & Omit<PlasmicFeatureCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFeatureCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFeatureCard__ArgProps,
      internalVariantPropNames: PlasmicFeatureCard__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFeatureCard__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureCard";
  } else {
    func.displayName = `PlasmicFeatureCard.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureCard = Object.assign(
  // Top-level PlasmicFeatureCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFeatureCard
    internalVariantProps: PlasmicFeatureCard__VariantProps,
    internalArgProps: PlasmicFeatureCard__ArgProps
  }
);

export default PlasmicFeatureCard;
/* prettier-ignore-end */

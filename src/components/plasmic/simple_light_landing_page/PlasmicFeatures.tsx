// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gkUEyTKG3Uz93y5yENHCXe
// Component: ndDAlZvYKw1COd
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
import Header from "../../Header"; // plasmic-import: L_7TFoqbRNz-Q/component
import Section from "../../Section"; // plasmic-import: qErZVvNcEr41M/component
import Bullet from "../../Bullet"; // plasmic-import: 52NlDLPmVwX3GE/component
import LinkButton from "../../LinkButton"; // plasmic-import: eom-4ThA65WwEc/component
import HomeCta from "../../HomeCta"; // plasmic-import: 84ghH0mxt-Li2/component
import Footer from "../../Footer"; // plasmic-import: R3FqJGCMmQuTc/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wyBYFmcvWCRFgK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: gkUEyTKG3Uz93y5yENHCXe/projectcss
import * as sty from "./PlasmicFeatures.module.css"; // plasmic-import: ndDAlZvYKw1COd/css

import simpleProjectLfXg2DgEk4MoYa from "./images/simpleProject.png"; // plasmic-import: LfXG2dgEK4moYa/picture
import task13XFPffgKgc99W from "./images/task.png"; // plasmic-import: 13xFPffgKGC99w/picture

export type PlasmicFeatures__VariantMembers = {};

export type PlasmicFeatures__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeatures__VariantsArgs;
export const PlasmicFeatures__VariantProps = new Array<VariantPropType>();

export type PlasmicFeatures__ArgsType = {};
type ArgPropType = keyof PlasmicFeatures__ArgsType;
export const PlasmicFeatures__ArgProps = new Array<ArgPropType>();

export type PlasmicFeatures__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  section?: p.Flex<typeof Section>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultFeaturesProps {
  className?: string;
}

function PlasmicFeatures__RenderFunc(props: {
  variants: PlasmicFeatures__VariantsArgs;
  args: PlasmicFeatures__ArgsType;
  overrides: PlasmicFeatures__OverridesType;
  dataFetches?: PlasmicFeatures__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__k2GWn)}
          >
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />

            <Section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames("__wab_instance", sty.section)}
              subtitle={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
              }
              title={"The ultimate in feature set."}
            />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__hoVyH)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__uVboY)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__wtlH3
                  )}
                >
                  {"Powerful suite of tools"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__r2XYp
                  )}
                >
                  {
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                  }
                </div>

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__u92SB)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__y1RP)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__unIao)}
                />

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__bf94O
                  )}
                >
                  {
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                  }
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box___2I0GI)}
                >
                  <LinkButton
                    text={"Start free trial"}
                    type={"solidBlue" as const}
                  />

                  <LinkButton
                    text={"View demo"}
                    type={"outlineBlue" as const}
                  />
                </p.Stack>
              </p.Stack>

              <div className={classNames(defaultcss.all, sty.box___1U0Oh)}>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__ovIqo)}
                  role={"img"}
                  src={simpleProjectLfXg2DgEk4MoYa}
                />

                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__it4I0)}
                  role={"img"}
                  src={task13XFPffgKgc99W}
                />
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__zpgjs)}
            >
              <div className={classNames(defaultcss.all, sty.box__edBg)}>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__dtJdf)}
                  role={"img"}
                  src={simpleProjectLfXg2DgEk4MoYa}
                />

                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__cbsgS)}
                  role={"img"}
                  src={task13XFPffgKgc99W}
                />
              </div>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.box__dIiSh)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__j22Qv
                  )}
                >
                  {"Powerful suite of tools"}
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__vi5OD
                  )}
                >
                  {
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                  }
                </div>

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__wodEd)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet___8W9Y)}
                />

                <Bullet
                  className={classNames("__wab_instance", sty.bullet__dKeww)}
                />

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box___5VCpK
                  )}
                >
                  {
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                  }
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box___1R24G)}
                >
                  <LinkButton
                    text={"Start free trial"}
                    type={"solidBlue" as const}
                  />

                  <LinkButton
                    text={"View demo"}
                    type={"outlineBlue" as const}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <HomeCta
              data-plasmic-name={"homeCta"}
              data-plasmic-override={overrides.homeCta}
              className={classNames("__wab_instance", sty.homeCta)}
            />

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "homeCta", "footer"],
  header: ["header"],
  section: ["section"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  section: typeof Section;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatures__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeatures__VariantsArgs;
    args?: PlasmicFeatures__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFeatures__Fetches;
  } & Omit<PlasmicFeatures__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFeatures__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFeatures__ArgProps,
      internalVariantPropNames: PlasmicFeatures__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures";
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */

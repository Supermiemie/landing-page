// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gkUEyTKG3Uz93y5yENHCXe
// Component: R3FqJGCMmQuTc
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
import IconLink from "../../IconLink"; // plasmic-import: VgUwDBkm5nZOV/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wyBYFmcvWCRFgK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: gkUEyTKG3Uz93y5yENHCXe/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: R3FqJGCMmQuTc/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: 5edP0uanu17vCw/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: gS0p5ld60cAYG5/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: KJerc57WTjNNVo/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: Cj7D2_tnnQx5kg/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: npO-9AiZQzuQW7/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  button?: p.Flex<"button">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  dataFetches?: PlasmicFooter__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__pUAvx)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___1FVib)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__vcpmy)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__jro53)}
            icon={
              <LogoIcon
                className={classNames(defaultcss.all, sty.svg__znOwC)}
                role={"img"}
              />
            }
          />

          <div className={classNames(defaultcss.all, sty.box__pxCex)}>
            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__lqcOk
              )}
              href={"#" as const}
            >
              {"Terms"}
            </a>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__nvy3U
              )}
            >
              {" ?? "}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__sbOjX
              )}
              href={"#" as const}
            >
              {"Privacy"}
            </a>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__qhmTf)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__t92M3)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__s5Vkn
              )}
            >
              {"Products"}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__nKkM2
              )}
              href={"#" as const}
            >
              {"Web Studio"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__jSzs8
              )}
              href={"#" as const}
            >
              {"DynamicBox Flex"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___2Sw3O
              )}
              href={"#" as const}
            >
              {"Programming Forms"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__m35Ue
              )}
              href={"#" as const}
            >
              {"Integrations"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__yKtgI
              )}
              href={"#" as const}
            >
              {"Command-line"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__erTkN)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__zoGky
              )}
            >
              {"Resources"}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__ylE0R
              )}
              href={"#" as const}
            >
              {"Documentation"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__e1X1R
              )}
              href={"#" as const}
            >
              {"Tutorials & Guides"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__f7YR
              )}
              href={"#" as const}
            >
              {"Blog"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__xet63
              )}
              href={"#" as const}
            >
              {"Support Center"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__ednI
              )}
              href={"#" as const}
            >
              {"Partners"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__jyfTl)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__okUe2
              )}
            >
              {"Company"}
            </div>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__tlWep
              )}
              href={"#" as const}
            >
              {"Home"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__bh0MH
              )}
              href={"#" as const}
            >
              {"About us"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__fBbQu
              )}
              href={"#" as const}
            >
              {"Company values"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__hf6Vt
              )}
              href={"#" as const}
            >
              {"Pricing"}
            </a>

            <a
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___9TEvl
              )}
              href={"#" as const}
            >
              {"Privacy policy"}
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box___579Gq)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__uspVl
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___5AGi
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <div className={classNames(defaultcss.all, sty.box__vvz1E)}>
              <input
                data-plasmic-name={"textbox"}
                data-plasmic-override={overrides.textbox}
                className={classNames(defaultcss.input, sty.textbox)}
                placeholder={"Your email" as const}
                size={1 as const}
                type={"text" as const}
                value={"" as const}
              />

              <div className={classNames(defaultcss.all, sty.box___7OVn5)} />

              <button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames(defaultcss.button, sty.button)}
              >
                <IconIcon
                  className={classNames(defaultcss.all, sty.svg__vSbdv)}
                  role={"img"}
                />
              </button>
            </div>
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__zM7Kb)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__o1EcS)}
      >
        <div className={classNames(defaultcss.all, sty.box__uGsp0)}>
          <a
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__dItl2
            )}
            href={"https://cruip.com/" as const}
          >
            {"Designed by Cruip. "}
          </a>

          <a
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__iXxQg
            )}
            href={"https://www.plasmic.app/" as const}
          >
            {"Built in Plasmic. "}
          </a>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__dz0O1
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__z8Nc5)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__mZaCb)}
            icon={
              <TwitterIconIcon
                className={classNames(defaultcss.all, sty.svg__fk60Z)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__eoNkf)}
            icon={
              <GithubIconIcon
                className={classNames(defaultcss.all, sty.svg__wBv2E)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__k0JqE)}
            icon={
              <FacebookIconIcon
                className={classNames(defaultcss.all, sty.svg___6Ruck)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox", "button"],
  textbox: ["textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFooter__Fetches;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */

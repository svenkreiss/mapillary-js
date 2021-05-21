/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import * as mapillary from '../../../mods/mapillary-js/dist/mapillary.module';
import * as three from '../../../mods/three/build/three.module';

import {appToken} from '../../js/utils/token';
import {mapillaryErrorHandler} from '../../js/utils/error';
import {ViewerComponent} from '../../js/components/ViewerComponent';

import * as animation from '../../js/examples/animation';
import * as flycontrols from '../../js/examples/fly-controls';
import * as procedural from '../../js/examples/procedural-data-provider';
import * as threerenderer from '../../js/examples/three-renderer';
import * as webglrenderer from '../../js/examples/webgl-renderer';

import '../../../mods/mapillary-js/dist/mapillary.css';

// Add react-live imports you need here
const ReactLiveScope = {
  appToken,
  mapillaryErrorHandler,
  animation,
  flycontrols,
  procedural,
  webglrenderer,
  threerenderer,
  ...mapillary,
  three,
  ViewerComponent,
  React,
  ...React,
};

export default ReactLiveScope;
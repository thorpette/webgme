/*
 * Copyright (C) 2013 Vanderbilt University, All rights reserved.
 * 
 * Author: Brian Broll
 */

"use strict";

define(['js/KeyboardManager/IKeyTarget'], function (IKeyTarget) {

    var SnapEditorWidgetKeyboard;

    SnapEditorWidgetKeyboard = function () {
    };

    _.extend(SnapEditorWidgetKeyboard.prototype, IKeyTarget.prototype);

    SnapEditorWidgetKeyboard.prototype.onKeyDown = function (eventArgs) {
        var ret = true;

        switch (eventArgs.combo) {
            case 'del':
                this.onSelectionDelete(this.selectionManager.getSelectedElements());
                ret = false;
                break;
            case 'ctrl+a':
                this.selectAll();
                ret = false;
                break;
            case 'ctrl+q':
                this.selectNone();
                ret = false;
                break;
            case 'ctrl+i':
                this.selectItems();
                ret = false;
                break;
            case 'ctrl+u':
                this.selectConnections();
                ret = false;
                break;
            case 'ctrl+l':
                this.selectInvert();
                ret = false;
                break;
            case 'up':
                this._moveSelection(0, -this.gridSize);
                ret = false;
                break;
            case 'down':
                this._moveSelection(0, this.gridSize);
                ret = false;
                break;
            case 'left':
                this._moveSelection(-this.gridSize, 0);
                ret = false;
                break;
            case 'right':
                this._moveSelection(this.gridSize, 0);
                ret = false;
                break;
            /*case 'ctrl+c':
                this.onClipboardCopy(this.selectionManager.getSelectedElements());
                ret = false;
                break;
            case 'ctrl+v':
                this.onClipboardPaste();
                ret = false;
                break;*/
        }

        return ret;
    };

    SnapEditorWidgetKeyboard.prototype.onKeyUp = function (eventArgs) {
        var ret = true;

        switch (eventArgs.combo) {
            case 'up':
                this._endMoveSelection();
                ret = false;
                break;
            case 'down':
                this._endMoveSelection();
                ret = false;
                break;
            case 'left':
                this._endMoveSelection();
                ret = false;
                break;
            case 'right':
                this._endMoveSelection();
                ret = false;
                break;
        }

        return ret;
    };

    SnapEditorWidgetKeyboard.prototype._moveSelection = function (dX, dY) {
        /*if (!this._keyMoveDelta) {
            this._keyMoveDelta = {"x": 0, "y": 0};
            this.dragManager._initDrag(0, 0);
            this.dragManager._startDrag(undefined);
        }

        this._keyMoveDelta.x += dX;
        this._keyMoveDelta.y += dY;

        this.dragManager._updateDraggedItemPositions(this._keyMoveDelta.x, this._keyMoveDelta.y);*/
    };

    SnapEditorWidgetKeyboard.prototype._endMoveSelection = function () {
        /*if (this._keyMoveDelta) {
            this._keyMoveDelta = undefined;
            this.dragManager._endDragAction();
        }*/
    };

    return SnapEditorWidgetKeyboard;
});

# FAQ and support status

Straight answers about supported behavior.

## Why does GameSpace stop after I close my game?

That is backend mode, on by default with Shizuku, Axeron or Root. GameSpace runs while the app is open or a library game is running and stops shortly after the game closes, so it does not sit in the background all day. Opening a game starts it again.

## Is Root required?

Not for basic features. Some tools require shell or Root, and some also need compatible hardware or kernel interfaces.

## Does it run on iPad?

This is an Android app. Tablet/iPad-ratio references describe shapes such as 4:3 on Android devices, not iPadOS support.

## Is tablet support guaranteed?

No. The v8.26 changes improve viewport calculations and panel positioning. Source and geometry checks do not replace rendering, touch, cutout and rotation tests on tablets.

## Can I download an APK here?

Yes, from GitHub Releases: take the .apk under Assets. The Source code (zip / tar.gz) archives GitHub adds to a release only contain this documentation and are not installable.

## Is GameSpace open source?

No. GameSpace is closed source and is not licensed under the GPL. Early builds carried leftover GPL notices; they were removed in 1.5.0. You may install and use the official APK, but copying, modifying, decompiling, repackaging or re-uploading it, or its assets such as ZEA, needs written permission.

## Licensing and ownership

ZKMNEXT GameSpace is proprietary software by ZKMNEXT, maintained by zuanvfx02. All rights reserved. The full terms are in LICENSE.

Open-source libraries used by the app keep their own licenses; they are listed in THIRD-PARTY-NOTICES.md. Those licenses cover only those libraries, not GameSpace.

This documentation does not claim bug-free operation, universal compatibility or that every third-party library is original ZKMNEXT code.

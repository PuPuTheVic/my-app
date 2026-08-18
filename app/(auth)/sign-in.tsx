import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Don&apos;t have an account? Sign up</Link>
    </SafeAreaView>
  );
};

export default SignIn;

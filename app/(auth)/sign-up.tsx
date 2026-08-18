import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>SignUp</Text>
      <Link href="/(auth)/sign-in">Already have an account? Sign in</Link>
    </SafeAreaView>
  );
};

export default SignUp;

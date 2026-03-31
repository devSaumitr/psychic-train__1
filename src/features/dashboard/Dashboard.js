import Animated, {
  FadeIn,
  FadeInDown,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { useState, useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import { calculatePremiumAPI } from "../../services/api";

export default function Dashboard() {
  const [premium, setPremium] = useState(38);
  const [claim, setClaim] = useState(null);

  // 🔥 PULSE ANIMATION
  const pulse = useSharedValue(1);

  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1.05, { duration: 1000 }),
      -1,
      true
    );
  }, []);

  const animatedPulse = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
  }));

  const calculatePremium = async () => {
    const res = await calculatePremiumAPI();
    setPremium(res.premium);
  };

  const simulateEvent = () => {
    setClaim({
      event: "Heavy Rain",
      payout: 500,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      simulateEvent();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Animated.View
      entering={FadeIn.duration(800)}
      style={{
        flex: 1,
        backgroundColor: "#020617",
        padding: 18,
      }}
    >

      {/* HEADER */}
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff"
      }}>
        ⚡ Forward Shield
      </Text>

      <Text style={{
        color: "#94A3B8",
        marginBottom: 18
      }}>
        AI-powered income protection
      </Text>

      {/* HERO CARD (GLASS + GLOW) */}
      <Animated.View
        entering={FadeInDown.delay(100).springify()}
        style={[
          {
            backgroundColor: "rgba(255,255,255,0.05)",
            padding: 22,
            borderRadius: 22,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
          },
          animatedPulse
        ]}
      >
        <Text style={{ color: "#94A3B8" }}>
          Protected Earnings
        </Text>

        <Text style={{
          color: "#fff",
          fontSize: 36,
          fontWeight: "bold",
          marginTop: 6
        }}>
          ₹{claim ? claim.payout : 0}
        </Text>

        <Text style={{
          color: "#22C55E",
          marginTop: 6
        }}>
          ● LIVE PROTECTION ACTIVE
        </Text>
      </Animated.View>

      {/* STATUS */}
      <Text style={{
        marginBottom: 12,
        color: "#64748B"
      }}>
        ⚡ Real-time monitoring active
      </Text>

      {/* RISK CARD */}
      <Animated.View
        entering={FadeInDown.delay(200).springify()}
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          padding: 16,
          borderRadius: 18,
          marginBottom: 14,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.08)"
        }}
      >
        <Text style={{ color: "#E2E8F0" }}>
          📡 Risk Engine
        </Text>

        <Text style={{
          color: "#EF4444",
          marginTop: 6,
          fontWeight: "600"
        }}>
          Heavy Rain Disruption Detected
        </Text>
      </Animated.View>

      {/* PREMIUM CARD */}
      <Animated.View
        entering={FadeInDown.delay(300).springify()}
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          padding: 16,
          borderRadius: 18,
          marginBottom: 14,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.08)"
        }}
      >
        <Text style={{ color: "#E2E8F0" }}>
          💰 Smart Premium
        </Text>

        <Text style={{
          fontSize: 30,
          fontWeight: "bold",
          marginVertical: 10,
          color: "#fff"
        }}>
          ₹{premium}
        </Text>

        {/* PRIMARY BUTTON */}
        <TouchableOpacity
          onPress={calculatePremium}
          style={{
            backgroundColor: "#6366F1",
            padding: 14,
            borderRadius: 14,
            marginTop: 6
          }}
        >
          <Text style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold"
          }}>
            UPDATE AI PREMIUM
          </Text>
        </TouchableOpacity>

        {/* SECONDARY BUTTON */}
        <TouchableOpacity
          onPress={simulateEvent}
          style={{
            backgroundColor: "#0F172A",
            padding: 14,
            borderRadius: 14,
            marginTop: 10
          }}
        >
          <Text style={{
            textAlign: "center",
            fontWeight: "600",
            color: "#94A3B8"
          }}>
            TRIGGER EVENT
          </Text>
        </TouchableOpacity>
      </Animated.View>

      {/* CLAIM CARD */}
      <Animated.View
        entering={FadeInDown.delay(400).springify()}
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          padding: 16,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.08)"
        }}
      >
        <Text style={{ color: "#E2E8F0" }}>
          💸 Instant Payout
        </Text>

        {claim ? (
          <>
            <Text style={{
              marginTop: 8,
              color: "#94A3B8"
            }}>
              Trigger: {claim.event}
            </Text>

            <Text style={{
              color: "#22C55E",
              marginTop: 6,
              fontWeight: "bold"
            }}>
              ₹{claim.payout} credited instantly ⚡
            </Text>
          </>
        ) : (
          <Text style={{
            marginTop: 8,
            color: "#64748B"
          }}>
            Awaiting disruption trigger...
          </Text>
        )}
      </Animated.View>

      {/* 🔥 POPUP */}
      {claim && (
        <Animated.View
          entering={FadeInDown.springify()}
          style={{
            position: "absolute",
            bottom: 30,
            left: 20,
            right: 20,
            backgroundColor: "#git 22C55E",
            padding: 16,
            borderRadius: 14,
          }}
        >
          <Text style={{
            color: "#000",
            textAlign: "center",
            fontWeight: "bold"
          }}>
            💸 ₹{claim.payout} credited instantly!
          </Text>
        </Animated.View>
      )}

    </Animated.View>
  );
}
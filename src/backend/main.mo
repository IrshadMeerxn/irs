import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Blob "mo:core/Blob";
import Time "mo:core/Time";
import List "mo:core/List";
import Principal "mo:core/Principal";

import Storage "blob-storage/Storage";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  type SkillCategory = {
    id : Nat;
    name : Text;
  };

  module SkillCategory {
    public func compare(skillCategory1 : SkillCategory, skillCategory2 : SkillCategory) : Order.Order {
      Nat.compare(skillCategory1.id, skillCategory2.id);
    };
  };

  type Skill = {
    id : Nat;
    name : Text;
    gender : Text;
    skillCategoryId : Nat;
    proficiencyLevel : Nat;
  };

  module Skill {
    public func compare(skill1 : Skill, skill2 : Skill) : Order.Order {
      Nat.compare(skill1.id, skill2.id);
    };
  };

  var nextSkillId = 1;
  let skillCategories = Map.empty<Nat, SkillCategory>();
  let skills = Map.empty<Nat, Skill>();
  let skillImages = Map.empty<Nat, Storage.ExternalBlob>();

  public shared ({ caller }) func addSkill(name : Text, skillCategoryId : Nat, proficiencyLevel : Nat, blob : Storage.ExternalBlob) : async () {
    let skill = {
      id = nextSkillId;
      name;
      skillCategoryId;
      proficiencyLevel;
      gender = "Unknown"; // Placeholder for future gender logic
    };
    nextSkillId += 1;

    skills.add(skill.id, skill);
    skillImages.add(skill.id, blob);
  };

  public query ({ caller }) func getSkillImage(skillId : Nat) : async ?Storage.ExternalBlob {
    skillImages.get(skillId);
  };
};
